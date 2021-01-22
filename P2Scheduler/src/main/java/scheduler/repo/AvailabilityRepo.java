package scheduler.repo;

import java.util.List;

import scheduler.models.Availability;

public interface AvailabilityRepo {
	public void insertAvailability(Availability availability);
	public Availability getAvailabilityById(int id);
	public List<Availability> getAllAvailabilities();
	public Availability getByUsers(int id);
	public void updateAvailability(Availability availability);
	public void deleteAvailability(Availability availability);
}
