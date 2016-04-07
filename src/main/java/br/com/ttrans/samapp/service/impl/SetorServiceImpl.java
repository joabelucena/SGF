package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.SetorDao;
import br.com.ttrans.samapp.model.Setor;
import br.com.ttrans.samapp.service.SetorService;

@Repository
public class SetorServiceImpl implements SetorService {

	@Autowired
	private SetorDao dao;
	
	@Transactional
	public void add(Setor obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Setor obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Setor obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Setor> loadData() {
		return dao.loadData();
	}

}
