package scheduler.repo;

import java.util.List;

import scheduler.models.User;

public interface UserRepo {
	public void insertUser(User user);
	public User getUserById(int id);
	public List<User> getAllUsers();
	public User getByCredentials(String email, String password);
	public void updateUser(User user);
	public void deleteUser(User user);
}
