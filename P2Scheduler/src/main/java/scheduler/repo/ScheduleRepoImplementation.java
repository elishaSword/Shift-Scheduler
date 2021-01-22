package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Schedule;

@Repository("ScheduleRepo")
@Transactional
public class ScheduleRepoImplementation implements ScheduleRepo{

	public ScheduleRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public void insertSchedule(Schedule schedule) {
		sesFact.getCurrentSession().save(schedule);
		
	}

	@Override
	public Schedule getScheduleById(int id) {
		return sesFact.getCurrentSession().get(Schedule.class, id);
	}

	@Override
	public List<Schedule> getAllSchedules() {
		return sesFact.getCurrentSession().createQuery("from Schedule", Schedule.class).list();
	}

	@Override
	public void updateSchedule(Schedule schedule) {
		sesFact.getCurrentSession().update(schedule);
	}

	@Override
	public void deleteSchedule(Schedule schedule) {
		sesFact.getCurrentSession().delete(schedule);
	}

}
