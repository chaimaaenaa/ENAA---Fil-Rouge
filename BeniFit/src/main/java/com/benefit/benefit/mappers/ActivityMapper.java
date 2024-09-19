package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.dto.CardioActivityDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.model.CardioActivity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface ActivityMapper {
    @Mapping(target = "userId", source = "user.id")
    ActivityDTO activityToActivityDTO(Activity activity);

    @Mapping(target = "user.id", source = "userId")
    Activity activityDTOToActivity(ActivityDTO activityDTO);

    @Mapping(target = "userId", source = "user.id")
    CardioActivityDTO cardioActivityToCardioActivityDTO(CardioActivity cardioActivity);

    @Mapping(target = "user.id", source = "userId")
    CardioActivity cardioActivityDTOToCardioActivity(CardioActivityDTO cardioActivityDTO);
}