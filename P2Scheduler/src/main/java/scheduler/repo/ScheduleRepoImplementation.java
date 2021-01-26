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
	public boolean insertSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().save(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
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
	public boolean updateSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().update(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().delete(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
