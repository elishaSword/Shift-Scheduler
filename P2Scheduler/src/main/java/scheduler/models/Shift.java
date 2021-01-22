package scheduler.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Shift {

	@Id
	@Column(name = "shift_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(name = "shift_time", nullable = false)
	private Date shiftTime;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "position_id", nullable = false)
	private Position position;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "schedule_id", nullable = false)
	private Schedule schedule;
	
	public Shift(int id, User user, Date shiftTime, Position position, Schedule schedule) {
		super();
		this.id = id;
		this.user = user;
		this.shiftTime = shiftTime;
		this.position = position;
		this.schedule = schedule;
	}
	
	public Shift() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(Date shiftTime) {
		this.shiftTime = shiftTime;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	@Override
	public String toString() {
		return "Shift [id=" + id + ", user=" + user + ", shiftTime=" + shiftTime + ", position=" + position
				+ ", schedule=" + schedule + "]";
	}


}
