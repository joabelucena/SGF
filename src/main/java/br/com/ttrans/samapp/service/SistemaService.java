package br.com.ttrans.samapp.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Sistema;

public interface SistemaService {
	public void add(Sistema obj, Authentication authentication);
	public void edit(Sistema obj, Authentication authentication);
	public void delete(Sistema obj, Authentication authentication);
	public List<Sistema> loadData();
}
