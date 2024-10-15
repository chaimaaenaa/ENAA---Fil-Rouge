//package com.benefit.benefit.testes;
//
//import com.benefit.model.Workout;
//import com.benefit.repositories.WorkoutRepository;
//import com.benefit.services.WorkoutService;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.*;
//
//import java.util.Optional;
//import java.util.List;
//import java.util.ArrayList;
//
//class WorkoutServiceTest {
//
//    @Mock
//    private WorkoutRepository workoutRepository;
//
//    @InjectMocks
//    private WorkoutService workoutService;
//
//    @Test
//    void testCreateWorkout() {
//        Workout workout = new Workout();
//        workout.setId(1L);
//        workout.setName("Full Body Workout");
//        workout.setDuration(90);
//
//        when(workoutRepository.save(any(Workout.class))).thenReturn(workout);
//
//        Workout createdWorkout = workoutService.createWorkout(workout);
//
//        assertNotNull(createdWorkout);
//        assertEquals("Full Body Workout", createdWorkout.getName());
//        assertEquals(90, createdWorkout.getDuration());
//    }
//
//    @Test
//    void testFindWorkoutById_ExistingWorkout() {
//        Workout workout = new Workout();
//        workout.setId(1L);
//        workout.setName("Cardio Blast");
//
//        when(workoutRepository.findById(1L)).thenReturn(Optional.of(workout));
//
//        Workout foundWorkout = workoutService.findWorkoutById(1L);
//
//        assertNotNull(foundWorkout);
//        assertEquals("Cardio Blast", foundWorkout.getName());
//    }
//
//    @Test
//    void testFindWorkoutById_WorkoutNotFound() {
//        when(workoutRepository.findById(1L)).thenReturn(Optional.empty());
//
//        assertThrows(RuntimeException.class, () -> workoutService.findWorkoutById(1L));
//    }
//
//    @Test
//    void testGetAllWorkouts() {
//        List<Workout> workouts = new ArrayList<>();
//        workouts.add(new Workout(1L, "Upper Body Workout", 60));
//        workouts.add(new Workout(2L, "Lower Body Workout", 45));
//
//        when(workoutRepository.findAll()).thenReturn(workouts);
//
//        List<Workout> result = workoutService.getAllWorkouts();
//
//        assertEquals(2, result.size());
//        assertEquals("Upper Body Workout", result.get(0).getName());
//        assertEquals("Lower Body Workout", result.get(1).getName());
//    }
//}
