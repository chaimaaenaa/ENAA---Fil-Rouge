package com.benefit.benefit.testes;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.mappers.ActivityMapper;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.repositories.ActivityRepository;
import com.benefit.benefit.services.ActivityService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ActivityServiceTest {

    @Mock
    private ActivityRepository activityRepository;
//Hna khlaqna mock (يعني نسخة وهمية) dyal ActivityRepository bach ntestiw l-code bla ma n3iytu 3la l-database.
// Yani ghadi y3tina résultat mn ghir ma idir real access l-database.

    @Mock
    private ActivityMapper activityMapper;
//B7al activityRepository, hna khlaqna mock dyal ActivityMapper bach ysehl lina
// bach nconvertiw bin ActivityDTO w Activity mn ghir ma nst3mlo real mapper.

    @InjectMocks  //Kat-st3mlha bach ndiro "injection" dyal les mocks (li tl3jna foq)
    // f l-object principal dyalna li ghadi ntestiw.
    private ActivityService activityService;
//Hna injectina (dkhlna) activityRepository w activityMapper f activityService.
// ActivityService howa l-service li ghadi ntestiw, w b @InjectMocks kat-sehl
// 3lina bach Mockito idir l-injection dyal les mocks f ActivityService
// automatique.

    @BeforeEach //Hadi annotation kat-dir chi preparation qbl ma ybda ay
        // test mn dakchi li kayn f test class. Mlli n-run chi test mn ActivityServiceTest,
        // @BeforeEach kat-dirchi setup bash nkhdmo l mocks ready.
    void setUp() {
        MockitoAnnotations.openMocks(this);
// li tat-khla9 kol mock objects li m7tajin f had test class.
// Mock objects kaysseru lik ttesti chi service bla ma tl3ab b Database.
    }

    @Test
    void testPostActivity() {
        //li tatkhdem add chi activité jdida l-database.

        ActivityDTO activityDTO = new ActivityDTO();
//Katkhlaq activityDTO o katsetti fih des valeurs bhal date,
// number of steps, distance, w calories burned.
        activityDTO.setDate(new Date());
        activityDTO.setSteps(5000);
        activityDTO.setDistance(3.5);
        activityDTO.setCaloriesBurned(200);

        Activity activity = new Activity();
        activity.setId(1L);
        activity.setDate(activityDTO.getDate());
        activity.setSteps(activityDTO.getSteps());
        activity.setDistance(activityDTO.getDistance());
        activity.setCaloriesBurned(activityDTO.getCaloriesBurned());

        when(activityMapper.activityDTOToActivity(activityDTO)).thenReturn(activity);
        when(activityRepository.save(activity)).thenReturn(activity);
//Kat3iyt activityService.postActivity(activityDTO);,
// o kayji idak tessti résultat dial service.

        Activity createdActivity = activityService.postActivity(activityDTO);

//Kayen assertNotNull(createdActivity);
// bach tchecki l activité jdida mzl kathdm.
        assertNotNull(createdActivity);
        assertEquals(1L, createdActivity.getId());
        assertEquals(5000, createdActivity.getSteps());
        assertEquals(3.5, createdActivity.getDistance());
        assertEquals(200, createdActivity.getCaloriesBurned());
    }
//Had l-méthode katsellek tessti getActivities,
// li tatretrie li liste dyal l-activities.
    @Test
    void testGetAllActivities() {
        // Arrange
//Katkhlaq activity o katmlla fih data dial date, steps, distance, calories burned.
        Activity activity = new Activity();
        activity.setId(1L);
        activity.setDate(new Date());
        activity.setSteps(4000);
        activity.setDistance(2.5);
        activity.setCaloriesBurned(150);

        List<Activity> activities = new ArrayList<>();
        activities.add(activity);//activities list l'ajouti fihom chi activity.

        ActivityDTO activityDTO = new ActivityDTO();
        activityDTO.setDate(activity.getDate());
        activityDTO.setSteps(activity.getSteps());
        activityDTO.setDistance(activity.getDistance());
        activityDTO.setCaloriesBurned(activity.getCaloriesBurned());

        when(activityRepository.findAll()).thenReturn(activities);
        when(activityMapper.activityToActivityDTO(activity)).thenReturn(activityDTO);

//Katdir call l- activityService.getActivities();
// o tantrana tsb9 list dial activities.
        List<ActivityDTO> result = activityService.getActivities();

//Katdir assertNotNull(result); bach tchecki list f3la nbnach kanina.
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(4000, result.get(0).getSteps());
        assertEquals(2.5, result.get(0).getDistance());
        assertEquals(150, result.get(0).getCaloriesBurned());
    //qader l valeurs dial result.get(0) b steps w autres
    }
}
