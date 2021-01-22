package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Shift;

@Repository("ShiftRepo")
@Transactional
public class ShiftRepoImplementation implements ShiftRepo{

	public ShiftRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public void insertShift(Shift shift) {
		sesFact.getCurrentSession().save(shift);
		
	}

	@Override
	public Shift getShiftById(int id) {
		return sesFact.getCurrentSession().get(Shift.class, id);
	}

	@Override
	public List<Shift> getAllShifts() {
		return sesFact.getCurrentSession().createQuery("from Shift", Shift.class).list();
	}

	@Override
	public List<Shift> getBySchedule(int schedule) {
		return sesFact.getCurrentSession().createQuery("from Shift where schedule_id = :schedule_id", Shift.class)
				.setParameter("schedule_id", schedule).list();
	}

	@Override
	public List<Shift> getByUser(int userId) {
		return sesFact.getCurrentSession().createQuery("from Shift where user_id = :user_id", Shift.class)
				.setParameter("user_id", userId).list();
	}

	@Override
	public List<Shift> getByPosition(int positionId) {
		return sesFact.getCurrentSession().createQuery("from Shift where position_id = :position_id", Shift.class)
				.setParameter("position_id", positionId).list();
	}

	@Override
	public void updateShift(Shift shift) {
		sesFact.getCurrentSession().update(shift);
	}

	@Override
	public void deleteShift(Shift shift) {
		sesFact.getCurrentSession().delete(shift);
	}

}
