package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.TrechoDao;
import br.com.ttrans.samapp.model.Trecho;
import br.com.ttrans.samapp.service.TrechoService;

@Repository
public class TrechoServiceImpl implements TrechoService {

	@Autowired
	private TrechoDao dao;
	
	@Transactional
	public void add(Trecho obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Trecho obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Trecho obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Trecho> loadData() {
		return dao.loadData();
	}


}
