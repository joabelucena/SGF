package br.com.ttrans.samapp.dao;

import java.util.List;

import br.com.ttrans.samapp.model.User;

public interface UserDao {
	void addUser(User user);
	void editUser(User user);
	void deleteUser(String userId);
	User get(String userID);
	User findUserByName(String username);
	List<User> getAllUsers();
}
