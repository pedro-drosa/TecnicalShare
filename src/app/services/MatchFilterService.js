import { isBefore, startOfHour, parseISO } from 'date-fns';
import UserRepository from '../repositories/UserRepository.js';
import MatchFilter from '../../utils/MatchFilter.js';
import FindMentorDayAvailabilityService from './FindMentorDayAvailabilityService.js';

const userRepository = new UserRepository();

class MatchFilterService {
  static async execute(currentUser, initialDate, finalDate) {
    const matchFilter = new MatchFilter(initialDate, finalDate);

    const initialRequestedDate = startOfHour(parseISO(initialDate));
    const finalRequestedDate = startOfHour(parseISO(finalDate));

    if (isBefore(initialRequestedDate, Date.now())) {
      throw new Error('you cannot create an appointment on a past date')
        .message;
    }

    if (isBefore(finalRequestedDate, initialRequestedDate)) {
      throw new Error('the end date cannot be less than the start date')
        .message;
    }

    const { tags } = await userRepository.findOneUserAndTagsById(currentUser);

    // all tags the user owns
    const allTags = tags.map((tag) => tag.tag_name);

    if (!allTags.length) {
      throw new Error(
        'Your user does not yet have the necessary information to use this filter',
      ).message;
    }

    const mentors = await userRepository.findAllCompatibleMentorsByTags(
      currentUser,
      allTags,
    );

    const [firstPlace, secoundPlace] = matchFilter.filterTwoProfiles(mentors);

    const firstPlaceSchedule = await FindMentorDayAvailabilityService.execute(
      firstPlace.id,
      initialDate,
    );

    const secoundPlaceSchedule = await FindMentorDayAvailabilityService.execute(
      secoundPlace.id,
      initialDate,
    );

    const [firstSchedule, secoundSchedule] = matchFilter.checkAvailableTimes(
      firstPlaceSchedule,
      secoundPlaceSchedule,
    );

    const others = mentors.filter(
      (mentor) => mentor !== firstPlace && mentor !== secoundPlace,
    );

    if (firstSchedule.length < 1 && secoundSchedule.length < 1) {
      return null;
    }

    if (firstSchedule.length > 0) {
      return {
        match: firstPlace,
        schedule: firstSchedule,
        others,
      };
    }

    return {
      match: secoundPlace,
      schedule: secoundSchedule,
      others,
    };
  }
}

export default MatchFilterService;
