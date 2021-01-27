package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Message;
import scheduler.repo.MessageRepo;

@Service
public class MessageService {

	@Autowired
	private MessageRepo messageRepo;
	
	public MessageService(MessageRepo messageRepo) {
		super();
		this.messageRepo = messageRepo;
	}
	
	public boolean insertMessage(Message message) {
		return messageRepo.insertMessage(message);
	}
	
	public boolean updateMessage(Message message) {
		return messageRepo.updateMessage(message);
	}
	
	public boolean deleteMessage(int id) {
		return messageRepo.deleteMessage(messageRepo.getMessageById(id));
	}
	
	public Message getMessageById(int id) {
		return messageRepo.getMessageById(id);
	}
	
	public List<Message> getMessageBySender(int id) {
		return messageRepo.getBySender(id);
	}
	
	public List<Message> getMessageByReciever(int id) {
		return messageRepo.getByReciever(id);
	}
	
	public List<Message> getMessageBySenderAndReciever(int senderId, int recieverId) {
		return messageRepo.getBySenderAndReciever(senderId, recieverId);
	}
	
	public List<Message> getAllMessage() {
		return messageRepo.getAllMessages();
	}
	
}
