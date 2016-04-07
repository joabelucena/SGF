package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Linha;

public interface LinhaDao {
	public void add(Linha obj, Authentication authentication);
	public void edit(Linha obj, Authentication authentication);
	public void delete(Linha obj, Authentication authentication);
	public List<Linha> loadData();
}
