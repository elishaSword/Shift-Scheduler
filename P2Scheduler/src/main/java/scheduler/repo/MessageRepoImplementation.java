package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Message;

@Repository("MessageRepo")
@Transactional
public class MessageRepoImplementation implements MessageRepo {

	public MessageRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;

	@Override
	public boolean insertMessage(Message message) {
		try{ 
			sesFact.getCurrentSession().save(message);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public Message getMessageById(int id) {
		return sesFact.getCurrentSession().get(Message.class, id);
	}

	@Override
	public List<Message> getAllMessages() {
		return sesFact.getCurrentSession().createQuery("from Message", Message.class).list();
	}

	@Override
	public List<Message> getBySender(int senderId) {
		return sesFact.getCurrentSession().createQuery("from Message where sender_id = :sender_id", Message.class)
				.setParameter("sender_id", senderId).list();
	}

	@Override
	public List<Message> getByReciever(int recieverId) {
		return sesFact.getCurrentSession().createQuery("from Message where reciever_id = :reciever_id", Message.class)
				.setParameter("reciever_id", recieverId).list();
	}

	@Override
	public List<Message> getBySenderAndReciever(int senderId, int recieverId) {
		return sesFact.getCurrentSession()
				.createQuery("from Message where sender_id = :sender_id AND reciever_id = : receiver_id", Message.class)
				.setParameter("sender_id", senderId).setParameter("reciever_id", recieverId).list();
	}

	@Override
	public boolean updateMessage(Message message) {
		try{ 
			sesFact.getCurrentSession().update(message);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteMessage(Message message) {
		try{ 
			sesFact.getCurrentSession().delete(message);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
