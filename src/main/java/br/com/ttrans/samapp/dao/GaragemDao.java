package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Garagem;

public interface GaragemDao {
	public void add(Garagem obj, Authentication authentication);
	public void edit(Garagem obj, Authentication authentication);
	public void delete(Garagem obj, Authentication authentication);
	public List<Garagem> loadData();
}
