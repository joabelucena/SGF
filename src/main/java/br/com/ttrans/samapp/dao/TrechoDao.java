package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Trecho;

public interface TrechoDao {
	public void add(Trecho obj, Authentication authentication);
	public void edit(Trecho obj, Authentication authentication);
	public void delete(Trecho obj, Authentication authentication);
	public List<Trecho> loadData();
}
