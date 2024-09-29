package com.benefit.benefit.services;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.model.Activity;

public interface ActivityService {

    Activity postActivity(ActivityDTO dto);

}
