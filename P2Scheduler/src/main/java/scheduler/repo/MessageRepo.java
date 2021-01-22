package scheduler.repo;

import java.util.List;

import scheduler.models.Message;

public interface MessageRepo {
	public void insertMessage(Message message);
	public Message getMessageById(int id);
	public List<Message> getAllMessages();
	public List<Message> getBySender(int messageId);
	public List<Message> getByReciever(int messageId);
	public List<Message> getBySenderAndReciever(int senderId, int recieverId);
	public void updateMessage(Message message);
	public void deleteMessage(Message message);
}
