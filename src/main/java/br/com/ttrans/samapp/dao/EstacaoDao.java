package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Estacao;

public interface EstacaoDao {
	public void add(Estacao obj, Authentication authentication);
	public void edit(Estacao obj, Authentication authentication);
	public void delete(Estacao obj, Authentication authentication);
	public List<Estacao> loadData();
}
