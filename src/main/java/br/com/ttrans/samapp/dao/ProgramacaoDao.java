package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Programacao;

public interface ProgramacaoDao {
	public void add(Programacao obj, Authentication authentication);
	public void edit(Programacao obj, Authentication authentication);
	public void delete(Programacao obj, Authentication authentication);
	public List<Programacao> loadData();
}
