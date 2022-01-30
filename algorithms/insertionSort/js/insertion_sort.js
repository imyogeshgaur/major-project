function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"radial-gradient(yellow,rgb(255, 217, 0))");

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"radial-gradient(red,rgb(235, 144, 144))");
            div_update(divs[i+1],div_sizes[i+1],"radial-gradient(red,rgb(235, 144, 144))");

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"radial-gradient(red,rgb(235, 144, 144))");
            div_update(divs[i+1],div_sizes[i+1],"radial-gradient(red,rgb(235, 144, 144))");
    
            div_update(divs[i],div_sizes[i],"radial-gradient(aqua,blue)");
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"radial-gradient(yellow,rgb(255, 217, 0))");
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"radial-gradient(aqua,blue)");
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"radial-gradient(greenyellow,green)");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"radial-gradient(greenyellow,green)");

    enable_buttons();
}