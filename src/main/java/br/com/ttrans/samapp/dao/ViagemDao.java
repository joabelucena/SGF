package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Viagem;

public interface ViagemDao {
	public void add(Viagem obj, Authentication authentication);
	public void edit(Viagem obj, Authentication authentication);
	public void delete(Viagem obj, Authentication authentication);
	public List<Viagem> loadData();
}
