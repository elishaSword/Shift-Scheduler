package scheduler.repo;

import java.util.Date;
import java.util.List;

import scheduler.models.Schedule;

public interface ScheduleRepo {
	public void insertSchedule(Schedule schedule);
	public Schedule getScheduleById(int id);
	public List<Schedule> getAllSchedules();
	public void updateSchedule(Schedule schedule);
	public void deleteSchedule(Schedule schedule);
}
