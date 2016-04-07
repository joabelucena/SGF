package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Setor;

public interface SetorDao {
	public void add(Setor obj, Authentication authentication);
	public void edit(Setor obj, Authentication authentication);
	public void delete(Setor obj, Authentication authentication);
	public List<Setor> loadData();
}
