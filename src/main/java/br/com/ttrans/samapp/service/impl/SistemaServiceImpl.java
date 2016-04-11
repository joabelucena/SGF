package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.SistemaDao;
import br.com.ttrans.samapp.model.Sistema;
import br.com.ttrans.samapp.service.SistemaService;

@Repository
public class SistemaServiceImpl implements SistemaService {

	@Autowired
	private SistemaDao dao;
	
	
	@Transactional
	public void add(Sistema obj, Authentication authentication) {
		dao.add(obj, authentication);
	}

	@Transactional
	public void edit(Sistema obj, Authentication authentication) {
		dao.edit(obj, authentication);
	}

	@Transactional
	public void delete(Sistema obj, Authentication authentication) {
		dao.delete(obj, authentication);
	}

	@Transactional
	public List<Sistema> loadData() {
		return dao.loadData();
	}

}
