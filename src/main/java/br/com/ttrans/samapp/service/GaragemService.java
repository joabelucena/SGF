package br.com.ttrans.samapp.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Garagem;

public interface GaragemService {
	public void add(Garagem obj, Authentication authentication);
	public void edit(Garagem obj, Authentication authentication);
	public void delete(Garagem obj, Authentication authentication);
	public List<Garagem> loadData();
}
