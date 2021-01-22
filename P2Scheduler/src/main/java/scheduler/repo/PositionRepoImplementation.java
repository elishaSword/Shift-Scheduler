package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Position;

@Repository("PositionRepo")
@Transactional
public class PositionRepoImplementation implements PositionRepo{

	public PositionRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public void insertPosition(Position position) {
		sesFact.getCurrentSession().save(position);
		
	}

	@Override
	public Position getPositionById(int id) {
		return sesFact.getCurrentSession().get(Position.class, id);
	}

	@Override
	public List<Position> getAllPositions() {
		return sesFact.getCurrentSession().createQuery("from Position", Position.class).list();
	}

	@Override
	public void updatePosition(Position position) {
		sesFact.getCurrentSession().update(position);
	}

	@Override
	public void deletePosition(Position position) {
		sesFact.getCurrentSession().delete(position);
	}

}
