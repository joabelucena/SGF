package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.LinhaDao;
import br.com.ttrans.samapp.model.Linha;
import br.com.ttrans.samapp.service.LinhaService;

@Repository
public class LinhaServiceImpl implements LinhaService {

	@Autowired
	private LinhaDao dao;
	
	@Transactional
	public void add(Linha obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Linha obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Linha obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Linha> loadData() {
		return dao.loadData();
	}


}
