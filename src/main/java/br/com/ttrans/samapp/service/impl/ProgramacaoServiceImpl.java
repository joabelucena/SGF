package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.ProgramacaoDao;
import br.com.ttrans.samapp.model.Programacao;
import br.com.ttrans.samapp.service.ProgramacaoService;

@Repository
public class ProgramacaoServiceImpl implements ProgramacaoService {

	@Autowired
	private ProgramacaoDao dao;
	
	@Transactional
	public void add(Programacao obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Programacao obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Programacao obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Programacao> loadData() {
		return dao.loadData();
	}


}
