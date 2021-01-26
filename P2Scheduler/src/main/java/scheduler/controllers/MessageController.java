package scheduler.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import scheduler.models.Message;
import scheduler.service.MessageService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class MessageController {
	
	@Autowired
	private MessageService messageService;
	
	public MessageController(MessageService messageService) {
		super();
		this.messageService = messageService;
	}
	
	@GetMapping(value = "/message", params = {"id"})
	public Message getMessageById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return messageService.getMessageById(id);
	}
	
	@GetMapping(value = "/message", params = {"sender_id", "reciever_id"})
	public List<Message> getMessageBySchedule(HttpServletRequest req, HttpServletResponse resp, int senderId, int recieverId) {
		resp.setStatus(200);
		return messageService.getMessageBySenderAndReciever(senderId, recieverId);
	}
	
	@GetMapping(value = "/message", params = {"sender_id"})
	public List<Message> getMessageByUser(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return messageService.getMessageBySender(id);
	}
	
	@GetMapping(value = "/message", params = {"reciever_id"})
	public List<Message> getMessageByPosition(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return messageService.getMessageByReciever(id);
	}
	
	@GetMapping(value = "/all-messages")
	public List<Message> getAllMessages(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return messageService.getAllMessage();
	}
	
	@PostMapping(value = "insert-message")
	public Message insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Message message) {
		if(messageService.insertMessage(message)) {
			resp.setStatus(200);
			return message;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-message")
	public Message update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Message message) {
		if(messageService.updateMessage(message)) {
			resp.setStatus(200);
			return message;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-message")
	public String delete(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Message message) {
		if(messageService.deleteMessage(message)) {
			resp.setStatus(200);
			return "Delete successful!";
		} else {
			resp.setStatus(500);
			return "Failed to delete account";
		}
	}
}
