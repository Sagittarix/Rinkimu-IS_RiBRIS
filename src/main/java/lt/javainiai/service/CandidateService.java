package lt.javainiai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.javainiai.model.CandidateEntity;
import lt.javainiai.repository.CandidateRepository;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    public CandidateEntity save(CandidateEntity candidate) {
        return this.candidateRepository.save(candidate);
    }

    public CandidateEntity update(Long id, CandidateEntity candidate) {
        return this.candidateRepository.update(id, candidate);
    }

    public List<CandidateEntity> findAll() {
        return this.candidateRepository.findAll();
    }

    public CandidateEntity findById(Long id) {
        return this.candidateRepository.findById(id);
    }

    public void deleteById(Long id) {
        this.candidateRepository.deleteById(id);
    }

}
