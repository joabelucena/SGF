package br.com.ttrans.samapp.service;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.PontoControle;

public interface PontoControleService {
	public void add(PontoControle obj, Authentication authentication);
	public void edit(PontoControle obj, Authentication authentication);
	public void delete(PontoControle obj, Authentication authentication);
	public List<PontoControle> loadData();
}
