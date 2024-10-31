package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.dto.CardioActivityDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.model.CardioActivity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper
  (unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface ActivityMapper {
    ActivityDTO activityToActivityDTO(Activity activity);

    Activity activityDTOToActivity(ActivityDTO activityDTO);

    CardioActivityDTO cardioActivityToCardioActivityDTO(CardioActivity cardioActivity);

    CardioActivity cardioActivityDTOToCardioActivity(CardioActivityDTO cardioActivityDTO);
}