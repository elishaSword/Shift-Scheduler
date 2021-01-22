package scheduler.repo;

import java.util.List;

import scheduler.models.Shift;

public interface ShiftRepo {
	public void insertShift(Shift shift);
	public Shift getShiftById(int id);
	public List<Shift> getAllShifts();
	public List<Shift> getBySchedule(int schedule);
	public List<Shift> getByUser(int userId);
	public List<Shift> getByPosition(int positionId);
	public void updateShift(Shift shift);
	public void deleteShift(Shift shift);
}
