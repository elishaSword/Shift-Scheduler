package scheduler.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class User {
	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "username", unique=true, nullable = false)
	private String username;
	
	@Column(name = "email", unique=true, nullable = false)
	private String email;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "is_manager", nullable = false)
	private boolean isManager;
	
	@Column(name = "phone")
	private int phone;
	
	public User(int id, String username, String email, String password, boolean isManager, int phone) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.isManager = isManager;
		this.phone = phone;
	}
	
	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isManager() {
		return isManager;
	}

	public void setManager(boolean isManager) {
		this.isManager = isManager;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", isManager=" + isManager + ", phone=" + phone + "]";
	}
}
