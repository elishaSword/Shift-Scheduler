package scheduler.repo;

import java.util.List;

import scheduler.models.Position;

public interface PositionRepo {
	public void insertPosition(Position position);
	public Position getPositionById(int id);
	public List<Position> getAllPositions();
	public void updatePosition(Position position);
	public void deletePosition(Position position);
}
