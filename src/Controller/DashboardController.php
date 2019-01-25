<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Projets;
use App\Repository\ProjetsRepository;

class DashboardController extends AbstractController
{
   
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function index(ProjetsRepository $repo)
    {
        $projets = $repo->findAll();
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
            'projets'=> $projets
        ]);
    }

    /**
     * @Route("/dashboard/new", name="dashboard_new")
     */
    public function create(Request $request, ObjectManager $manager)
    {
        $projets = new Projets();

        $form = $this->createFormBuilder($projets)
                     ->add('title')
                     ->add('description')
                     ->add('image')
                     ->add('git')
                     ->add('url')
                     ->getForm();


        return $this->render('dashboard/create.html.twig',[
                'formProjet' => $form->createView()

            ]);
    }

    

    /**
     * @Route("/dashboard/projet/{id}", name="projets_show")
     */
    public function show(Projets $projet){
        return $this->render('dashboard/projet.html.twig', [
            'projet'=> $projet
        ]);
    }

   
}
