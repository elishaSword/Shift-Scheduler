package scheduler.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

public class Availability {
	@Id
	@Column(name = "availability_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@OneToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(name = "monday", nullable = false)
	private boolean monday;
	
	@Column(name = "tuesday", nullable = false)
	private boolean tuesday;
	
	@Column(name = "wednesday", nullable = false)
	private boolean wednesday;
	
	@Column(name = "thursday", nullable = false)
	private boolean thursday;
	
	@Column(name = "friday", nullable = false)
	private boolean friday;
	
	@Column(name = "saturday", nullable = false)
	private boolean saturday;
	
	@Column(name = "sunday", nullable = false)
	private boolean sunday;
	
	public Availability() {
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

	public boolean isMonday() {
		return monday;
	}

	public void setMonday(boolean monday) {
		this.monday = monday;
	}

	public boolean isTuesday() {
		return tuesday;
	}

	public void setTuesday(boolean tuesday) {
		this.tuesday = tuesday;
	}

	public boolean isWednesday() {
		return wednesday;
	}

	public void setWednesday(boolean wednesday) {
		this.wednesday = wednesday;
	}

	public boolean isThursday() {
		return thursday;
	}

	public void setThursday(boolean thursday) {
		this.thursday = thursday;
	}

	public boolean isFriday() {
		return friday;
	}

	public void setFriday(boolean friday) {
		this.friday = friday;
	}

	public boolean isSaturday() {
		return saturday;
	}

	public void setSaturday(boolean saturday) {
		this.saturday = saturday;
	}

	public boolean isSunday() {
		return sunday;
	}

	public void setSunday(boolean sunday) {
		this.sunday = sunday;
	}

	@Override
	public String toString() {
		return "Availability [id=" + id + ", user=" + user + ", monday=" + monday + ", tuesday=" + tuesday
				+ ", wednesday=" + wednesday + ", thursday=" + thursday + ", friday=" + friday + ", saturday="
				+ saturday + ", sunday=" + sunday + "]";
	}
}
