package scheduler.repo;

import java.util.Date;
import java.util.List;

import scheduler.models.Schedule;

public interface ScheduleRepo {
	public boolean insertSchedule(Schedule schedule);
	public Schedule getScheduleById(int id);
	public List<Schedule> getAllSchedules();
	public boolean updateSchedule(Schedule schedule);
	public boolean deleteSchedule(Schedule schedule);
}
