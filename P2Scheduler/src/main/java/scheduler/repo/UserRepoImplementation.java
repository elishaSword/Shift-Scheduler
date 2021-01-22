package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.User;

@Repository("UserRepo")
@Transactional
public class UserRepoImplementation implements UserRepo{

	public UserRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public void insertUser(User user) {
		sesFact.getCurrentSession().save(user);
		
	}

	@Override
	public User getUserById(int id) {
		return sesFact.getCurrentSession().get(User.class, id);
	}

	@Override
	public List<User> getAllUsers() {
		return sesFact.getCurrentSession().createQuery("from User", User.class).list();
	}

	@Override
	public User getByCredentials(String email, String password) {
		return sesFact.getCurrentSession().createQuery("FROM User WHERE email = :email AND password = :password", User.class)
				.setParameter("email", email)
				.setParameter("password", password).list().get(0);
	}

	@Override
	public void updateUser(User user) {
		sesFact.getCurrentSession().update(user);
	}

	@Override
	public void deleteUser(User user) {
		sesFact.getCurrentSession().delete(user);
	}

}
