package br.com.ttrans.samapp.service;

import java.util.List;

import br.com.ttrans.samapp.model.Role;

public interface RoleService {
	void add(Role role);
	void edit(Role role);
	void delete(Role role);
	Role get(int id);
	Role findByDesc(String text);
	List<Role> getAll();
}
