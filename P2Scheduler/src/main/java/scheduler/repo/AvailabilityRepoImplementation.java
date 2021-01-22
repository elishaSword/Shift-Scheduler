package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Availability;

@Repository("AvailabilityRepo")
@Transactional
public class AvailabilityRepoImplementation implements AvailabilityRepo {

	public AvailabilityRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;

	@Override
	public void insertAvailability(Availability availability) {
		sesFact.getCurrentSession().save(availability);

	}

	@Override
	public Availability getAvailabilityById(int id) {
		return sesFact.getCurrentSession().get(Availability.class, id);
	}

	@Override
	public List<Availability> getAllAvailabilities() {
		return sesFact.getCurrentSession().createQuery("from Availability", Availability.class).list();
	}

	@Override
	public Availability getByUsers(int id) {
		return sesFact.getCurrentSession().createQuery("from Availability where user_id = :user_id", Availability.class)
				.setParameter("user_id", id).list().get(0);
	}

	@Override
	public void updateAvailability(Availability availability) {
		sesFact.getCurrentSession().update(availability);
	}

	@Override
	public void deleteAvailability(Availability availability) {
		sesFact.getCurrentSession().delete(availability);
	}

}
