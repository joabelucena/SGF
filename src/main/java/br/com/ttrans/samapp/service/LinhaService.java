package br.com.ttrans.samapp.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Linha;

public interface LinhaService {
	public void add(Linha obj, Authentication authentication);
	public void edit(Linha obj, Authentication authentication);
	public void delete(Linha obj, Authentication authentication);
	public List<Linha> loadData();
}
