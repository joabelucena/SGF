package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.PontoControleDao;
import br.com.ttrans.samapp.model.PontoControle;
import br.com.ttrans.samapp.service.PontoControleService;

@Repository
public class PontoControleServiceImpl implements PontoControleService {

	@Autowired
	private PontoControleDao dao;
	
	@Transactional
	public void add(PontoControle obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(PontoControle obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(PontoControle obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<PontoControle> loadData() {
		return dao.loadData();
	}


}
