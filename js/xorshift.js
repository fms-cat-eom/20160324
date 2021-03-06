var xorshift = ( function() {

  let seed;
  let xorshift = function( _seed ) {
    seed = _seed || seed || 1;
    seed = seed ^ ( seed << 13 );
    seed = seed ^ ( seed >>> 17 );
    seed = seed ^ ( seed << 5 );
    return seed / Math.pow( 2, 32 ) + 0.5;
  };

  return xorshift;

} )();
