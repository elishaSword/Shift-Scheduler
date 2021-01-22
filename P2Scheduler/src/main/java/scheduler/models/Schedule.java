package scheduler.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Schedule {
	
	@Id
	@Column(name = "schedule_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "schedule_date", nullable = false)
	private Date startDate;
	
	public Schedule() {
		super();
	}
	
	public Schedule(int id, Date startDate) {
		super();
		this.id = id;
		this.startDate = startDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Override
	public String toString() {
		return "Schedule [id=" + id + ", startDate=" + startDate + "]";
	}
	
}
