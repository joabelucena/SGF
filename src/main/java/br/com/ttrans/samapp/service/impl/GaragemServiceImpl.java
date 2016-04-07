package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.GaragemDao;
import br.com.ttrans.samapp.model.Garagem;
import br.com.ttrans.samapp.service.GaragemService;

@Repository
public class GaragemServiceImpl implements GaragemService {

	@Autowired
	private GaragemDao dao;
	
	@Transactional
	public void add(Garagem obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Garagem obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Garagem obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Garagem> loadData() {
		return dao.loadData();
	}


}
