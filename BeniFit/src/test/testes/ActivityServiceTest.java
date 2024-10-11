package com.benefit.testes;

import com.benefit.model.Activity;
import com.benefit.repositories.ActivityRepository;
import com.benefit.services.ActivityService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;

class ActivityServiceTest {

    @Mock
    private ActivityRepository activityRepository;

    @InjectMocks
    private ActivityService activityService;

    @Test
    void testCreateActivity() {
        // Example dial Activity
        Activity activity = new Activity();
        activity.setId(1L);
        activity.setName("Running");
        activity.setDuration(60);

        // Mocking l'activité lli kayt3mrer b activityRepository
        when(activityRepository.save(any(Activity.class))).thenReturn(activity);

        Activity createdActivity = activityService.createActivity(activity);

        assertNotNull(createdActivity);
        assertEquals("Running", createdActivity.getName());
        assertEquals(60, createdActivity.getDuration());
    }

    @Test
    void testFindActivityById_ExistingActivity() {
        Activity activity = new Activity();
        activity.setId(1L);
        activity.setName("Cycling");

        when(activityRepository.findById(1L)).thenReturn(Optional.of(activity));

        Activity foundActivity = activityService.findActivityById(1L);

        assertNotNull(foundActivity);
        assertEquals("Cycling", foundActivity.getName());
    }

    @Test
    void testFindActivityById_ActivityNotFound() {
        when(activityRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> activityService.findActivityById(1L));
    }

    @Test
    void testGetAllActivities() {
        List<Activity> activities = new ArrayList<>();
        activities.add(new Activity(1L, "Swimming", 45));
        activities.add(new Activity(2L, "Jogging", 30));

        when(activityRepository.findAll()).thenReturn(activities);

        List<Activity> result = activityService.getAllActivities();

        assertEquals(2, result.size());
        assertEquals("Swimming", result.get(0).getName());
        assertEquals("Jogging", result.get(1).getName());
    }
}
