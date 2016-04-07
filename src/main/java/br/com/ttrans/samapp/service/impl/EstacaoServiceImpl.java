package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.EstacaoDao;
import br.com.ttrans.samapp.model.Estacao;
import br.com.ttrans.samapp.service.EstacaoService;

@Repository
public class EstacaoServiceImpl implements EstacaoService {

	@Autowired
	private EstacaoDao dao;
	
	@Transactional
	public void add(Estacao obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Estacao obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Estacao obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Estacao> loadData() {
		return dao.loadData();
	}


}
