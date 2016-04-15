package br.com.ttrans.samapp.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.util.JRLoader;

@Controller
@RequestMapping("/report")
public class ReportController {

	@Autowired
	private ApplicationContext appContext;
	
	private static final String REPORTS_PATH = "/WEB-INF/reports/";

	@RequestMapping(method = RequestMethod.POST)
	public void getRpt1(
			@RequestParam(required=true, value="label") String label,
			@RequestBody Map<String, Object> params,
			HttpServletResponse response) throws JRException, IOException {
		
		System.out.println("chegou");
		
		BasicDataSource ds = (BasicDataSource) appContext.getBean("dataSource");

		try {
			InputStream jasperStream = this.getClass().getResourceAsStream(REPORTS_PATH + label + ".jasper");
			
//			params.put("Cartao de"			, "0");
//			params.put("Cartao ate"			, "999");
//			
//			params.put("Nome de"			, "A");
//			params.put("Nome ate"			, "Z");
//			
//			params.put("Tipo Cartao de"		, "VT");
//			params.put("Tipo Cartao ate"	, "VT");
			
			
			JasperReport jasperReport = (JasperReport) JRLoader.loadObject(jasperStream);
			JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, ds.getConnection());

			response.setContentType("application/pdf");
			response.setHeader("Content-disposition", "inline; filename=" + label + ".pdf");

			final OutputStream outStream = response.getOutputStream();
			JasperExportManager.exportReportToPdfStream(jasperPrint, outStream);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
